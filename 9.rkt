#lang racket


(define (make-vect xcor-vect ycor-vect)
  (cons xcor-vect ycor-vect))

(define (xcor-vect vect)
  (car vect))

(define (ycor-vect vect)
  (cdr vect))

(define a (make-vect 2 3))
(define b (make-vect 0 3))


(define (calc-vect sign first-arg second-arg)
  (make-vect (sign (if (pair? first-arg) (xcor-vect first-arg) first-arg)
                (xcor-vect second-arg))
             (sign (if (pair? first-arg) (ycor-vect first-arg) first-arg)
                (ycor-vect second-arg))))

(define (add-vect first-vect second-vect)
  (calc-vect + first-vect second-vect))

(define (sub-vect first-vect second-vect)
  (calc-vect - first-vect second-vect))

(define (scale-vect k first-vect)
  (calc-vect * k first-vect))

(define (make-segment start-segment end-segment)
  (cons start-segment end-segment))

(define (start-segment line)
  (car line))

(define (end-segment line)
  (cdr line))

(define ab (make-segment a b))

(define (transform-painter painter origin corner1 corner2)
  (lambda (frame)
    (let ((m (frame-coord-map frame)))
      (let ((new-origin (m origin)))
        (painter
         (make-frame new-origin
                     (sub-vect (m corner1) new-origin)
                     (sub-vect (m corner2) new-origin)))))))

(define (flip-vert painter)
  (transform-painter painter
                     (make-vect 0.0 1.0) 
                     (make-vect 1.0 1.0) 
                     (make-vect 0.0 0.0)))

(define (shrink-to-upper-right painter)
  (transform-painter painter
                     (make-vect 0.5 0.5)
                     (make-vect 1.0 0.5)
                     (make-vect 0.5 1.0)))

(define (rotate90 painter)
  (transform-painter painter
                     (make-vect 1.0 0.0)
                     (make-vect 1.0 1.0)
                     (make-vect 0.0 0.0)))

(define (rotate180 painter)
  (transform-painter painter
                     (make-vect 1.0 1.0)
                     (make-vect 0.0 1.0)
                     (make-vect 1.0 0.0)))

(define (rotate270 painter)
  (transform-painter painter
                     (make-vect 0.0 1.0)
                     (make-vect 1.0 0.0)
                     (make-vect 1.0 1.1)))

(define (flip-horiz painter)
  (transform-painter painter
                     (make-vect 1.0 0.0)
                     (make-vect 0.0 0.0)
                     (make-vect 1.0 1.0)))

(define (segments->painter segment-list)
  (lambda (frame)
    (for-each
     (lambda (segment)
       (draw-line
        ((frame-coord-map frame) (start-segment segment))
        ((frame-coord-map frame) (end-segment segment))))
     segment-list)))

(define (make-frame origin edge1 edge2)
  (cons origin (cons edge1 edge2)))

(define (frame-coord-map frame)
  (lambda (v)
    (add-vect
     (origin-frame frame)
     (add-vect (scale-vect (xcor-vect v)
                           (edge1-frame frame))
               (scale-vect (ycor-vect v)
                           (edge2-frame frame))))))

(define (beside painter1 painter2)
  (let ((split-point (make-vect 0.5 0.0)))
    (let ((paint-left
           (transform-painter painter1
                              (make-vect 0.0 0.0)
                              split-point
                              (make-vect 0.0 1.0)))
          (paint-right
           (transform-painter painter2
                              split-point
                              (make-vect 1.0 0.0)
                              (make-vect 0.5 1.0))))
      (lambda (frame)
        (paint-left frame)
        (paint-right frame)))))

(define (below painter1 painter2)
  (let ((split-point (make-vect 0.0 0.5)))
    (let ((paint-bottom
           (transform-painter painter1
                              (make-vect 0.0 0.0)
                              (make-vect 0.0 1.0)
                               split-point))
          (paint-top
           (transform-painter painter2
                              split-point
                              (make-vect 1.0 0.5)
                              (make-vect 0.0 1.0))))
      (lambda (frame)
        (paint-bottom frame)
        (paint-top frame)))))

(define (below2 painter1 painter2)
  (rotate-90 (beside (rotate-270 painter1) 
                     (rotate-270 painter2))))