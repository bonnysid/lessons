#lang racket
(define  (fact x)
  (if (= x 1)
      1
      (* x (fact (- x 1)))))

(define (fact2 x)
  (define (iter product counter)
    (if (> counter x)
        product
        (iter (* counter product) (+ counter 1))))
  (iter 1 1))

(define (A x y)
  (cond ((= y 0) 0)
        ((= x 0) (* 2 y))
        ((= y 1) 2)
        (else (A (- x 1)
                 (A x (- y 1))))))

(define (fib n)
  (cond ((= n 0) 0)
        ((= n 1) 1)
        (else (+ (fib (- n 1)) (fib (- n 2))))))

(define (fib2 n)
  (define (fib-iter a b n)
    (if (= n 0)
        b
        (fib-iter (+ a b) a (- n 1))))
  (fib-iter 1 0 n))

(define (count-change amount)
  
  (define (first-denomination kind-of-coins)
    (cond ((= kind-of-coins 1) 1)
          ((= kind-of-coins 2) 5)
          ((= kind-of-coins 3) 10)
          ((= kind-of-coins 4) 25)
          ((= kind-of-coins 5) 50)))
  
  (define (cc amount kind-of-coins)
    (cond ((= amount 0) 1)
          ((or (= kind-of-coins 0) (< amount 0)) 0)
          (else (+ (cc amount (- kind-of-coins 1))
                   (cc (- amount (first-denomination kind-of-coins)) kind-of-coins)))))
  
  (cc amount 5))

(define (f n)
  (if (< n 3) 
      n
      (+ (f (- n 1))
         (* (f (- n 2)) 2)
         (* (f (- n 3)) 3))))

(define (f2 n)
  (define (f-iter a b c n)
    (if (= n 0)
        c
        (f-iter (+ a b c) a b (- n 1))))
  (f-iter 2 1 0 n))

(define (pascal row elem)
  (if (or (< row 3) (= elem 1) (= elem row))
      1
      (+ (pascal (- row 1) (- elem 1))
         (pascal (- row 1) elem))))

(define (sqr x count)
  (define n x)
  (define (sqr-iter x count)
    (if (= count 1)
        x
        (sqr-iter (* x n) (- count 1))))
  (sqr-iter x count))

(define (abs x)
  (if (< x 0) (- x) x))

(define (sqrt n)
  (define (sqrt-iter count n)
    (if (good-enough? count n)
        count
        (sqrt-iter (improve count n) n)))
  (define (improve count n)
    (/ (+ (compare count n) count) 2))
  (define (compare count n)
    (/ n count))
  (define (good-enough? count n)
    (< (abs (- (sqr count 2) n)) 0.001))
  (sqrt-iter 1.0 n))

(define (doc n)
  (define f (/ (+ 1 (sqrt 5)) 2))
  (define u (/ (- 1 (sqrt 5)) 2))
  (define (fibon n f u)
    (if (= n 0)
        0
        (/ (- (sqr f n) (sqr u n)) (sqrt 5))))
  (fibon n f u))
