#lang racket
(define (pow x n)
  (define (pow-iter x n res)
    (cond ((= n 0) res)
        ((check n) (pow-iter (* x x) (/ n 2) res))
         (else (pow-iter x (- n 1) (* res x)))))
  
  (pow-iter x n 1))


(define (check n)
  (= (remainder n 2) 0))

(define (ymn a b)
  (define (double x)
    (+ x x))
  (define (halve x)
    (/ x 2))
  (define (iter a b res)
    (cond ((= b 0) res)
          ((check b) (iter (double a) (halve b) res))
          (else (iter a (- b 1) (+ res a)))))
  (iter a b 0))

(define (fib n)
  (fib-iter 1 0 0 1 n))

(define (square x)
  (* x x))

(define (fib-iter a b p q count)
  (cond ((= count 0) b)
        ((even? count)
         (fib-iter a
                   b
                   (+ (square p) (square q))
                   (+ (* 2 p q) (square q))
                   (/ count 2)))
        (else (fib-iter (+ (* b q) (* a q) (* a p))
                        (+ (* b p) (* a q))
                        p
                        q
                        (- count 1)))))

(define (nod a b)
  (cond ((= a 0) b)
        ((= b 0) a)
      (else (nod (remainder a b) (remainder b a)))))

(define (gcd a b)
  (if (= b 0)
      a
      (gcd b (remainder a b))))

(define (smallest-divisor n)
  (find-divisor n 2))

(define (find-divisor n test-divisor)
  (cond ((> (square test-divisor) n) n)
        ((divides? test-divisor n) test-divisor)
        (else (find-divisor n (next test-divisor)))))

(define (divides? a b)
  (= (remainder b a) 0))

(define (next n) 
  (if (= n 2) 
      3 
      (+ n 2)))