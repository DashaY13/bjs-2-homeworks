// Задача 1
function parseCount(number) {
    const parsed = parseInt(number);
    if (isNaN(parsed)) throw new Error("Невалидное значение");
    return parsed;
  }
    
  function validateCount(number) {
    try {
        const parsed = parseInt(number);
        if (isNaN(parsed)) throw new Error("Невалидное значение");
        return parsed;
      }
      catch(e) {
        console.log('Ошибка произошла!');
      }
    }
  
  // Задача 2
    class Triangle {
    constructor(a, b, c) {
      this.a = a;
      this.b = b;
      this.c = c;
    }
  
    getPerimeter(a, b, c) {
      if (a > b + c || b > a + c || c > a + b) return 'Треугольник с такими сторонами не существует';
      const p = (a + b + c) / 2;
      return p;
    }
  
    getArea(a, b, c) {
      if (a > b + c || b > a + c || c > a + b) return 'Треугольник с такими сторонами не существует';
      const s = (p * (p - a) * (p - b) * (p - c)) ** 0.5;
      return s;
    }
  }
  
    function existenceTriangle(a, b, c) {
      if (a > b + c || b > a + c || c > a + b) throw new Error("Треугольник с такими сторонами не существует"); {
        return Error;
    }
  
    function getTriangle() {
      try {
        return {
          getArea: function() {return "Ошибка! Треугольник не существует"},
          getPerimeter: function() {return "Ошибка! Треугольник не существует"}
        }
      }
      catch(e) {
        console.log('Ошибка произошла!');
      }
    }
  }
  
  