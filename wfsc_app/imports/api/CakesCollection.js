import { Mongo } from 'meteor/mongo';
 
export const CakesCollection = new Mongo.Collection( 'cakes' );

class Cake {
    constructor( id, name, comment, imageUrl, yumFactor ) {
        this.id = id || null;
        this.name = name || '';
        this.comment = comment || '';
        this.imageUrl = imageUrl || '';
        this.yumFactor = yumFactor || '';
    }
}

