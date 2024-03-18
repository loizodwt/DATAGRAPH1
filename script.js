document.addEventListener("DOMContentLoaded", function () {
    const barsData = [20, 50, 80, 120, 200]; // Données de barres a changer ici
    const chart = document.getElementById("chart");
  
    function createBars(data) {
      const barWidth = 40;
      const barSpacing = 50;
      let xPos = 20;
      let maxHeight = Math.max(...data);
  
      data.forEach((value) => {
        const barHeight = (value / maxHeight) * 300; // Hauteur de la barre en fonction de la valeur
  
        const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        rect.setAttribute("x", xPos);
        rect.setAttribute("y", 400 - barHeight);
        rect.setAttribute("width", barWidth);
        rect.setAttribute("height", barHeight);
        rect.setAttribute("fill", "red");
  
        chart.appendChild(rect);
  
        xPos += barWidth + barSpacing;
      });
    }
  
    createBars(barsData);
  








    gsap.from("rect", {
      scaleY: 0,
      transformOrigin: "bottom",
      duration: 0.3,
      stagger: 0.2,
      scrollTrigger: {
        trigger: "rect",
        start: "top 100%", 
        end: "bottom 60%",
      
      },
    });
  });
  