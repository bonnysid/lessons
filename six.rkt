#lang racket
(define (make-rat x y)
  (let ((g (gcd x y)))
    (cond ((and (< x 0) (< y 0)) (cons (/ x g) (/ y g)))
          ((< x 0) (cons (/ x g) (* -1 (/ y g))))
          ((< y 0) (cons (* -1 (/ x g)) (/ y g)))
          (else (cons (/ x g) (/ y g))))))

(define (numer x) (car x))

(define (denom x) (cdr x))

(define (print-rat x)
  (display (numer x))
  (display "/")
  (display (denom x)))

(define (add-rat x y)
  (make-rat (+ (* (numer x) (denom y))
               (* (numer y) (denom x)))
            (* (denom x) (denom y))))

(define (sub-rat x y)
  (make-rat (- (* (numer x) (denom y))
               (* (numer y) (denom x)))
            (* (denom x) (denom y))))

(define (mul-rat x y)
  (make-rat (* (numer x) (numer y))
            (* (denom x) (denom y))))

(define (div-rat x y)
  (make-rat (* (numer x) (denom y))
            (* (denom x) (numer y))))

(define (equal-rat? x y)
  (= (* (numer x) (denom y))
     (* (numer y) (denom x))))

(define (make-segment start-segment end-segment)
  (cons start-segment end-segment))

(define (start-segment line) (car line))

(define (end-segment line) (cdr line))
  

(define (make-point x-point y-point)
  (cons x-point y-point))

(define (x-point dot) (car dot))

(define (y-point dot) (cdr dot))

(define (mid-point line)
  (make-point (/ (+ (x-point (start-segment line)) (x-point (end-segment line))) 2.0)
              (/ (+ (y-point (start-segment line)) (y-point (end-segment line))) 2.0))) 

(define (print-point p)
  (newline)
  (display "(")
  (display (x-point p))
  (display ",")
  (display (y-point p))
  (display ")"))

(define (rect a b)
  (cons a b))

(define (fline rect)
  (car rect))
(define (sline rect)
  (cdr rect))
         
(define (rect-width rect)
  (let ((x1 (x-point (start-segment (fline rect))))
        (y1 (y-point (start-segment (fline rect))))
        (x2 (x-point (end-segment (fline rect))))
        (y2 (y-point (end-segment (fline rect)))))
  (sqrt (+ (sqr (- x2 x1))
           (sqr (- y2 y1))))))

(define (rect-height rect)
  (let ((x1 (x-point (start-segment (sline rect))))
        (y1 (y-point (start-segment (sline rect))))
        (x2 (x-point (end-segment (sline rect))))
        (y2 (y-point (end-segment (sline rect)))))
  (sqrt (+ (sqr (- x2 x1))
           (sqr (- y2 y1))))))


(define (rect-per rect)
  (+ (* (rect-width rect) 2)
     (* (rect-height rect) 2)))

(define (rect-pl rect)
  (* (rect-width rect)
     (rect-height rect)))

(define a (make-point -1 2))
(define b (make-point -1 0))
(define ab (make-segment a b))
(define c (make-point 2 0))
(define bc (make-segment b c))
(define abcd (rect ab bc))

(define (cons1 x y)
  (lambda (m) (m x y)))

(define (car1 z)
  (z (lambda (p q) p)))

(define (cdr1 z)
(z (lambda (p q) q)))

(define (make-interval a b) (cons a b))

(define (upper-bound a)
  (cdr a))

(define (lower-bound a)
  (car a))

(define (add-interval x y)
  (make-interval (+ (lower-bound x) (lower-bound y))
                 (+ (upper-bound x) (upper-bound y))))

(define (sub-interval x y)
  (make-interval (- (lower-bound x) (lower-bound y))
                 (- (upper-bound x) (upper-bound y))))

(define (mul-interval x y)
  (let ((p1 (* (lower-bound x) (lower-bound y)))
        (p2 (* (lower-bound x) (upper-bound y)))
        (p3 (* (upper-bound x) (lower-bound y)))
        (p4 (* (upper-bound x) (upper-bound y))))
    (make-interval (min p1 p2 p3 p4)
                   (max p1 p2 p3 p4))))

(define (div-interval x y)
  (mul-interval x
                (make-interval (/ 1.0 (upper-bound y))
                               (/ 1.0 (lower-bound y)))))

(define (rad-interval x)
  (/ (+ (lower-bound x) (upper-bound x)) 2.0))

(define int2 (make-interval 3 4))
(define int (make-interval 1 2))
