document.addEventListener("DOMContentLoaded", function() {
    const cambiarColorBtn = document.getElementById("cambiarColorBtn");
    
    cambiarColorBtn.addEventListener("click", function() {
        const colors = ["#FF5733", "#33FF57", "#5733FF", "#33A3FF"];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        
        document.body.style.backgroundColor = randomColor;
    });
});
