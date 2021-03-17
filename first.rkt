#lang racket
(define (square x)
	(* x x))

(define (max a b)
	(if (> a b) a b))

(define (min a b)
	(if (< a b) a b))

(define (sum-of-squares-of-top-two a b c)
	(+ (square (max a b)) (square (max (min a b) c))))