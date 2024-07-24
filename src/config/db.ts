import { Sequelize } from "sequelize";
import dotenv from 'dotenv'

dotenv.config()

const urlDB = process.env.DATABASE_URL as string;

export const sequelize = new Sequelize(urlDB, {
    dialect: 'postgres'
});

export const connectDB = async () => {
    
    try {
        await sequelize.authenticate();
        await sequelize.sync({ force: false })
        console.log('La conección fue exitosa');
    } catch (error) {
        console.log('Error al conectar a sequelize')
    }
}