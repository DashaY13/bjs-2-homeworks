// Задача 1
function parseCount(number) {
    const parsed = parseInt(number);
    if (isNaN(parsed)) throw new Error("Невалидное значение");
    return parsed;
  }
    
  function validateCount(number) {
    try {
      const parsed = parseCount(number);
      return parsed;
    } catch(e) {
      return e;
    }
  }
  
  // Задача 2
    class Triangle {
    constructor(a, b, c) {
      if(a > b + c || b > a + c || c > a + b){
        throw new Error('Треугольник с такими сторонами не существует');
      }
      this.a = a;
      this.b = b;
      this.c = c;
    }
  
    getPerimeter() {
      return this.a + this.b + this.c;
    }
  
    getArea(a, b, c) {
      const halfP = this.getPerimeter() / 2;
    return Number((Math.sqrt(halfP * (halfP - this.a) * (halfP - this.b) * (halfP - this.c))).toFixed(3));
    }
  }
  
  function getTriangle(a, b, c) {
    try {
      return new Triangle(a, b, c);
    } catch (e) {
      return {
        getArea: function() {return "Ошибка! Треугольник не существует"},
        getPerimeter: function() {return "Ошибка! Треугольник не существует"}
      }  
    }
  }
  
  