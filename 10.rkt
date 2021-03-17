#lang racket

(define (memq item x)
  (cond ((null? x) false)
        ((eq? item (car x)) x)
        (else (memq item (cdr x)))))

(define (equal? a b) 
  (or (and (null? a) 
           (null? b)) 
      (and (number? a) 
           (number? b) 
           (= a b)) 
      (and (symbol? a) 
           (symbol? b) 
           (eq? a b)) 
      (and (pair? a) 
           (pair? b) 
           (equal? (car a) (car b)) 
           (equal? (cdr a) (cdr b)))))

(define (deriv exp var)
  (cond ((number? exp) 0)
        ((variable? exp)
         (if (same-variable? exp var) 1 0))
        ((sum? exp)
         (make-sum (deriv (addend exp) var)
                   (deriv (augend exp) var)))
        ((product? exp)
         (make-sum
          (make-product (multiplier exp)
                        (deriv (multiplicand exp) var))
          (make-product (deriv (multiplier exp) var)
                        (multiplicand exp))))
        ((exponentiation? exp)
         (make-product
          (make-product
           (exponent exp)
           (make-exponentiation (base exp)
                                (- (exponent exp) 1)))
          (deriv (base exp) var)))
        (else
         (error "неизвестный тип выражения -- DERIV" exp))))

(define (variable? x) (symbol? x))

(define (same-variable? v1 v2)
  (and (variable? v1) (variable? v2) (eq? v1 v2)))

(define (non-number? x)
  (not (number? x)))

(define (make-product . seq) 
  (let ((vars (filter non-number? seq)) 
        (const (accumulate * 1 (filter number? seq)))) 
    (cond ((null? vars) const) 
          ((= 0 const) 0) 
          ((= 1 const) (make-product-list vars)) 
          (else (make-product-list (cons const vars))))))

(define (filter predicate sequence)
  (cond ((null? sequence) null)
        ((predicate (car sequence))
         (cons (car sequence)
               (filter predicate (cdr sequence))))
        (else (filter predicate (cdr sequence)))))

(define (accumulate op initial sequence)
  (if (null? sequence)
      initial
      (op (car sequence)
          (accumulate op initial (cdr sequence)))))

(define (enumerate-interval low high)
  (if (> low high)
      null
      (cons low (enumerate-interval (+ low 1) high))))

(define (enumerate-tree tree)
  (cond ((null? tree) null)
        ((not (pair? tree)) (list tree))
        (else (append (enumerate-tree (car tree))
                      (enumerate-tree (cdr tree))))))

(define (sum-odd-squares tree)
  (accumulate +
              0
              (map square
                   (filter odd?
                           (enumerate-tree tree)))))

(define (square x)
  (* x x))


(define (=number? exp num)
  (and (number? exp) (= exp num)))

(define (sum? e)
  (and (pair? e)
       (not (null? (split '+ e)))))

(define (omit-parenthesis e)
  (if (null? (cdr e))
      (car e)
      e))

(define (addend e)
  (omit-parenthesis (car (split '+ e))))

(define (augend e)
  (omit-parenthesis (cadr (split '+ e))))

(define (make-sum-list seq) 
  (if (null? (cdr seq)) 
      (car seq) 
      (cons '+ seq)))

(define (make-sum . seq) 
  (let ((vars (filter non-number? seq)) 
        (const (accumulate + 0 (filter number? seq)))) 
    (cond ((null? vars) const) 
          ((= 0 const) (make-sum-list vars)) 
          (else (make-sum-list (cons const vars))))))

(define (product? e)
  (and (pair? e)
       (not (sum? e))
       (not (null? (split '* e)))))


(define (multiplier e)
  (omit-parenthesis (car (split '* e))))

(define (make-product-list seq) 
  (if (null? (cdr seq)) 
      (car seq) 
      (cons '* seq)))

(define (multiplicand e)
  (omit-parenthesis (cadr (split '* e))))

(define (add-parenthesis predicate? e)
  (if (predicate? e)
      e
      (list e)))

(define (sum-or-product? e)
  (pair? e))

(define (split el seq)
  (define (split-iter before after)
    (cond ((null? after) null)
          ((eq? (car after) el) (list before (cdr after)))
          (else (split-iter (append before (list (car after)))
                            (cdr after)))))
  (split-iter '() seq))

(define (make-operation op predicate? arg1 arg2)
  (append (add-parenthesis predicate? arg1)
          (list op)
          (add-parenthesis predicate? arg2)))

(define (exponentiation? exp)
  (and (pair? exp) (eq? (car exp) '**)))

(define (make-exponentiation base expt)
     (cond ((=number? expt 0) 1)
        ((=number? expt 1) base)
        ((and (number? base) (number? expt)) (power base expt))
        (else (list '** base expt))))

(define (exponent x)
  (caddr x))

(define (power a b) 
  (exp (* b (log a))))

(define (base x)
  (cadr x))

(define (element-of-set? x set)
  (cond ((null? set) false)
        ((= x (entry set)) true)
        ((< x (entry set))
         (element-of-set? x (left-branch set)))
        ((> x (entry set))
         (element-of-set? x (right-branch set)))))

;(define (adjoin-set x set)
  ;(cond ((null? set) (make-tree x ’() ’()))
       ; ((= x (entry set)) set)
       ; ((< x (entry set))
       ;  (make-tree (entry set)
       ;             (adjoin-set x (left-branch set))
        ;            (right-branch set)))
       ; ((> x (entry set))
       ;  (make-tree (entry set)
       ;             (left-branch set)
       ;             (adjoin-set x (right-branch set))))))

(define (intersection-set set1 set2)
  (if (or (null? set1) (null? set2))
      '()
      (let ((x1 (car set1)) (x2 (car set2)))
        (cond ((= x1 x2)
               (cons x1
                     (intersection-set (cdr set1)
                                       (cdr set2))))
              ((< x1 x2)
               (intersection-set (cdr set1) set2))
              ((< x2 x1)
               (intersection-set set1 (cdr set2)))))))

(define (entry tree) (car tree))



(define (make-tree entry left right)
  (list entry left right))

(define (list->tree elements)
  (car (partial-tree elements (length elements))))

;(define (tree->list-2 tree)
;  (define (copy-to-list tree result-list)
;    (if (null? tree)
;        result-list
;        (copy-to-list (left-branch tree)
;                     (cons (entry tree)
;                           (copy-to-list (right-branch tree)
;                                        result-list))))))

;(define (lookup given-key set-of-records) 
;  (cond ((null? set-of-records) false) 
;        ((= given-key (key (entry set-of-records))) 
;         (entry set-of-records)) 
;        ((< given-key (key (entry set-of-records))) 
;         (lookup given-key (left-branch set-of-records))) 
;        ((> given-key (key (entry set-of-records))) 
;         (lookup given-key (right-branch set-of-records)))))

(define (partial-tree elts n)
  (if (= n 0)
      (cons '() elts)
      (let ((left-size (quotient (- n 1) 2)))
        (let ((left-result (partial-tree elts left-size)))
          (let ((left-tree (car left-result))
                (non-left-elts (cdr left-result))
                (right-size (- n (+ left-size 1))))
            (let ((this-entry (car non-left-elts))
                  (right-result (partial-tree (cdr non-left-elts)
                                              right-size)))
              (let ((right-tree (car right-result))
                    (remaining-elts (cdr right-result)))
                (cons (make-tree this-entry left-tree right-tree)
                      remaining-elts))))))))

(define (union-set-tree set1 set2) 
  (list->tree (union-set (tree->list set1)          
                         (tree->list set2))))

(define (intersection-set-tree set1 set2) 
  (list->tree (intersection-set (tree->list set1)          
                                (tree->list set2))))

(define (make-leaf symbol weight)
  (list ’leaf symbol weight))

(define (leaf? object)
  (eq? (car object) ’leaf))

(define (symbol-leaf x) (cadr x))

(define (weight-leaf x) (caddr x))

(define (make-code-tree left right)
  (list left
        right
        (append (symbols left) (symbols right))
        (+ (weight left) (weight right))))

(define (left-branch tree) (car tree))

(define (right-branch tree) (cadr tree))

(define (symbols tree)
  (if (leaf? tree)
      (list (symbol-leaf tree))
      (caddr tree)))

(define (weight tree)
  (if (leaf? tree)
      (weight-leaf tree)
      (cadddr tree)))

(define (decode bits tree)
  (define (decode-1 bits current-branch)
    (if (null? bits)
        ’()
        (let ((next-branch
               (choose-branch (car bits) current-branch)))
          (if (leaf? next-branch)
              (cons (symbol-leaf next-branch)
                    (decode-1 (cdr bits) tree))
              (decode-1 (cdr bits) next-branch)))))
  (decode-1 bits tree))

(define (choose-branch bit branch)
  (cond ((= bit 0) (left-branch branch))
        ((= bit 1) (right-branch branch))
        (else (error "плохой бит -- CHOOSE-BRANCH" bit))))

(define (adjoin-set x set)
  (cond ((null? set) (list x))
        ((< (weight x) (weight (car set))) (cons x set))
        (else (cons (car set)
                    (adjoin-set x (cdr set))))))

(define (make-leaf-set pairs)
  (if (null? pairs)
      '()
      (let ((pair (car pairs)))
        (adjoin-set (make-leaf (car pair)
                               (cadr pair))
                    (make-leaf-set (cdr pairs))))))

(define sample-tree
  (make-code-tree (make-leaf ’A 4)
                  (make-code-tree
                   (make-leaf ’B 2)
                   (make-code-tree (make-leaf ’D 1)
                                   (make-leaf ’C 1)))))