import { ProductManager } from "./ProductManager.js"

let miPrimeraTienda = new ProductManager("./products.json")

miPrimeraTienda.addProduct("Pan", "Pan de modle", 200, "sin imagen", "001", 10)
miPrimeraTienda.addProduct("Leche", "Leche descremada", 200, "sin imagen", "002", 10)
miPrimeraTienda.addProduct("Huevos", "Huevos de gallina", 200, "sin imagen", "003", 10)
miPrimeraTienda.addProduct("Arroz", "Arroz blanco", 150, "sin imagen", "004", 15);
miPrimeraTienda.addProduct("Fideos", "Fideos de trigo", 100, "sin imagen", "005", 20);
miPrimeraTienda.addProduct("Aceite", "Aceite de oliva", 250, "sin imagen", "006", 30);
miPrimeraTienda.addProduct("Sal", "Sal fina", 50, "sin imagen", "007", 40);
miPrimeraTienda.addProduct("Azúcar", "Azúcar blanca", 80, "sin imagen", "008", 25);
miPrimeraTienda.addProduct("Café", "Café molido", 180, "sin imagen", "009", 15);
miPrimeraTienda.addProduct("Papel Higiénico", "Papel higiénico suave", 120, "sin imagen", "010", 50);

