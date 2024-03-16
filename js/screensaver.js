document.addEventListener("DOMContentLoaded", function() {
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
           
    var x1Move = -3;
    var y1Move = 1;
    var x2Move = -1;
    var y2Move = 6;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    class Line {
        constructor(paramx1, paramy1, paramx2, paramy2, paramx1Move, paramy1Move, paramx2Move, paramy2Move,paramcolor) {
            this.x1 = paramx1;
            this.y1 = paramy1;
            this.x2 = paramx2;
            this.y2 = paramy2;
           
            this.x1Move = paramx1Move;
            this.y1Move = paramy1Move;
            this.x2Move = paramx2Move;
            this.y2Move = paramy2Move;

            this.color = paramcolor;
        }
    }

    

   
    var lines = [ ];

    for (var i = 0; i < 100; i++) {
        lines[i] = new Line(234, 356, 468, 579, 3, 1, 1, 6, "#00FA7A");
    }

    function draw() {
        canvas.width = window.innerWidth;

        if (window.innerWidth != canvas.width) {
            canvas.width = window.innerWidth;
        }
        if (window.innerHeight != canvas.height) {
            canvas.height = window.innerHeight;
        }

        for(var i = lines.length - 1; i >=0; i--) {
            var curLine = lines[i];

            if (i < lines.length-1) {

                lines[i+1] = structuredClone(lines[i]);
            }

            if (i == 0) {
                curLine.x1 += curLine.x1Move;
                curLine.y1 += curLine.y1Move;
                curLine.x2 += curLine.x2Move;
                curLine.y2 += curLine.y2Move;

                if (curLine.x1 > canvas.width || curLine.x1 < 0) {
                    curLine.x1Move *= -1;
                }
                if (curLine.y1 > canvas.height || curLine.y1 < 0) {
                    curLine.y1Move *= -1;
                }
                if (curLine.x2 > canvas.width || curLine.x2 < 0) {
                    curLine.x2Move *= -1;
                }
                if (curLine.y2 > canvas.height || curLine.y2 < 0) {
                    curLine.y2Move *= -1;
                }
                
                lines[i] = curLine;
            }
            
            ctx.beginPath();
            ctx.moveTo(curLine.x1, curLine.y1); // Starting point of the line
            ctx.lineTo(curLine.x2, curLine.y2); // Ending point of the line
            ctx.strokeStyle = curLine.color;
            ctx.stroke();

        }
      
    }
    setTimeout(function () { setInterval(draw, 6) }, 0);
 });