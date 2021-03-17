#lang racket
(define (sqrt x)
  (sqrt-iter 1.0 x))

(define (sqrt-iter quess x)
  (if (good-enough? quess (improve quess x))
      quess
      (sqrt-iter (improve quess x) x)))

(define (abs x)
  (if (< x 0) (- x) x))

(define (square x)
  (* x x))

(define (good-enough? quess x)
  (< (abs (-  quess x)) 0.001))

(define (average x y)
  (/ (+ x y) 2))

(define (improve quess x)
  (average quess (/ x quess)))

(define (improve-for-cube x y)
  (/ (+ (/ x (square y)) (* 2 y)) 3))

(define (sqrt-iter-for-cube quess x)
  (if (good-enough-for-cube quess x)
      quess
      (sqrt-iter-for-cube (improve-for-cube x quess) x)))

(define (scr x)
  (sqrt-iter-for-cube 1.0 x))

(define (good-enough-for-cube quess x)
  (< (abs (- (* quess quess quess) x)) 0.001)) 


