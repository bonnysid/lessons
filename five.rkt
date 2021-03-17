#lang racket
(define (square x)
  (* x x))

(define (f x y)
  ((lambda (a b)
     (+ (* x (square a))
        (* y b)
        (* a b)))
     (+ 1 (* x y)) (- y 1)))

(define (f2 x y)
  (let ((a (+ 1 (* x y)))
        (b (- 1 y)))
    (+ (* x (square a))
       (* y b)
       (* a b))))

(define (average a b)
  (/ (+ a b) 2))

(define (cube x)
  (* x x x))

(define (close-enough? x y)
  (< (abs (- x y)) 0.001))

(define (search f a b)
  (let ((x (average a b)))
    (if (close-enough? a b)
        x
        (let ((test-value (f x)))
              (cond ((positive? test-value)
                     (search f a x))
                     ((negative? test-value)
                      (search f x b))
                      (else x))))))

(define (half-interval-method f a b)
  (let ((a-value (f a))
        (b-value (f b)))
    (cond ((and (negative? a-value)
                (positive? b-value))
           (search f a b))
          ((and (negative? b-value)
                (positive? a-value))
                (search f b a))
          (else (error "Error!" a b)))))

(define tolerance 0.00001)

(define (fixed-point f first-quess)
  (define (close-enough? v1 v2)
    (< (abs (- v1 v2)) tolerance))
  (define (try guess)
    (let ((next (f guess)))
      (if (close-enough? guess next)
          next
          (try next))))
  (try first-quess))

(define (sqrt x)
  (fixed-point (lambda (y) (average y (/ x y))) 1.0))

(define (average-damp f)
  (lambda (x) (average x (f x))))

(define dx 0.00001)

(define (derive g)
  (lambda (x)
    (/ (- (g (+ x dx)) (g x)) dx)))

(define (newton-transform g)
  (lambda (x) (- x (/ (g x) ((derive g) x)))))

(define (newton-method g quess)
  (fixed-point (newton-transform g) quess))

(define (sqrt-with-newton x)
  (newton-method (lambda (y) (- (square y) x )) 1.0))


(define (repeated f counter)
	(lambda (x)
		(define (repeated-iter x counter)
			(if (= counter 0)
				x
				(repeated-iter (f x) (- counter 1))))
          (repeated-iter x counter)))
                          