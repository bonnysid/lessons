#lang racket
(define (sum term a next b)
  (define (iter a result) 
    (if (> a b)
        result
        (iter (next a) (+ result (term a)))))
  (iter a 0))

(define (inc n) (+ n 1))
(define (cube x) (* x x x))
(define (indentity x) x)

(define (sum-cubes a b)
  (sum cube a inc b))

(define (pi-sum a b)
  (define (pi-term x) (/ 1.0 (* a 2)))
  (define (pi-next x) (+ x 4))
  (sum pi-term a pi-next b))

(define (sum-int a b)
  (sum indentity a inc b))

(define (integral f a b dx)
  (define (add-dx x) (+ x dx))
  (* (sum f (+ a (/ dx 2)) add-dx b)
     dx))

(define (simpson f a b n)
  (define h (/ (- b a) n))
  (define (g k)
    (define (c k)
      (cond ((= k 0) 1)
            ((= k n) 1)
            ((even? k) 2)
            (else 4)))
    (* (c k) (f (+ a (* k h)))))
  (/ (* (sum g 0 inc n) h) 3))
