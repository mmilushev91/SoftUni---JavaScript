class ShadyCarDealership {
    constructor(dealerName, revenue = 0) {
        this.dealerName = dealerName;
        this.availableCars = [];
        this.soldCars = [];
        this.revenue = revenue;
    }

    addCar(model, year, mileage, price) {
        if (!model || year < 1950 || mileage < 0 || price < 0) {
            throw new Error("Invalid car!");
        }

        const car = { model, year, mileage, price };
        this.availableCars.push(car);

        return `New car added: ${model} (${year}) / ${mileage} km. - ${price.toFixed(2)}$`;
    }

    sellCar(model, desiredYear) {
        const carIndex = this.availableCars.findIndex(car => car.model === model);

        if (carIndex === -1) {
            throw new Error(`${model} was not found!`);
        }

        const car = this.availableCars[carIndex];
        let soldPrice = car.price;

        if (car.year >= desiredYear) {
            soldPrice = car.price;
        } else if (desiredYear - car.year <= 5) {
            soldPrice = car.price * 0.90;
        } else {
            soldPrice = car.price * 0.80;
        }

        this.availableCars.splice(carIndex, 1);
        this.soldCars.push({ model: car.model, year: car.year, mileage: car.mileage, soldPrice });

        this.revenue += soldPrice;

        return `${car.model} (${car.year}) was sold for ${soldPrice.toFixed(2)}$`;
    }

    prepareCarForSale(model) {
        const car = this.availableCars.find(car => car.model === model);

        if (!car) {
            return `${model} was not found for preparation!`;
        }

        car.mileage *= 0.50;
        car.price *= 1.30;

        return `${car.model} (${car.year}) is prepared for sale with ${car.mileage} km. - ${car.price.toFixed(2)}$`;
    }

    salesJournal(criteria) {
        const sorting = {
            year: (a, b) => b.year - a.year,
            model: (a, b) => a.model.localeCompare(b.model),
        };

        if (!sorting[criteria]) {
            throw new Error("Invalid criteria!");
        }

        this.soldCars.sort(sorting[criteria]);

        const output = [
            `${this.dealerName} has a total income of ${this.revenue.toFixed(2)}$`,
            `${this.soldCars.length} cars sold:`
        ];

        this.soldCars.forEach(car => {
            output.push(`${car.model} (${car.year}) / ${car.mileage} km. / ${car.soldPrice.toFixed(2)}$`);
        });

        return output.join("\n");
    }
}
