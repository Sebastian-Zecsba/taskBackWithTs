import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../config/db";

export interface ITask {
    id?: number;
    title: string,
    description: string 
}

interface TaskCreationAttributes extends Optional<ITask, 'id'> {}

const Task = sequelize.define<Model<ITask, TaskCreationAttributes>>('Task', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'tasks',
    timestamps: true,
})

export default Task