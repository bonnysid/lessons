#lang racket
(define (list-ref items n)
  (if (= n 0)
      (car items)
      (list-ref (cdr items) (- n 1))))

(define squares (list 1 4 9 16 25))

(define (length items)
  (define (length-iter a count)
    (if (null? a)
        count
        (length-iter (cdr a) (+ 1 count))))
  (length-iter items 0))

(define odds (list 1 3 5 7))

(define (last-pair list)
  (define (iter list k)
    (if (= k 1)
        (car list)
        (iter (cdr list) (- k 1))))
  (iter list (length list)))

(define (reverse items) 
  (define (reverse-iter source result) 
    (if (null? source) 
        result 
        (reverse-iter (cdr source) (cons (car source) result)))) 
  (reverse-iter items (list)))

(define x (list (list 1 2) (list 3 4)))

(define (deep-reverse items) 
  (define (deep-reverse-iter source result) 
    (define (reverse-it element) 
      (if (list? element) 
          (deep-reverse element) 
          element)) 
    (if (null? source) 
        result 
        (deep-reverse-iter (cdr source) 
                           (cons (reverse-it (car source)) result)))) 
  (deep-reverse-iter items (list)))
(define (scale-list items factor)
  (map (lambda (x) (* x factor))
       items))

(define (count-leaves x)
  (cond ((null? x) 0)
        ((not (pair? x)) 1)
        (else (+ (count-leaves (car x))
                 (count-leaves (cdr x))))))


  