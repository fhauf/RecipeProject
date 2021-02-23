import { StringifyOptions } from "querystring";

export class Ingredient {
    private name: String;
    private amount: number;
    private unitOfMeasure: string;
    public viewModel: string;

    constructor(name: string, amt: number, uom: string) {
        this.name = name;
        this.amount = amt;
        this.unitOfMeasure = uom;

        if (this.unitOfMeasure === "item") {
            this.viewModel = this.name + ' (' + this.amount + ')';
        }
        else {
            this.viewModel = this.name + ' (' + this.amount + ' ' + this.unitOfMeasure + ')';
        }
    }
}