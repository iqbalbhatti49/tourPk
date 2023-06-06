module.exports = (sequelize, DataTypes) => {
    const Room = sequelize.define('Room', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            startAt: 1,
            increment: 1,
        },
        roomType: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        roomsCount: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        capacity: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        rentPerNight: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        bedConfiguration: {
            type: DataTypes.STRING,
            allowNull: false
        },
        view: {
            type: DataTypes.STRING,
            allowNull: false
        },
        roomSize: {
            type: DataTypes.STRING,
            allowNull: false
        },
        smoking: {
            type: DataTypes.STRING,
            allowNull: false
        },
        isAvailable: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            default: true
        },
    }, {
        timestamps: false,
    });

    Room.associate = (models) => {
        Room.hasMany(models.BookingHotel, {
            onDelete: "cascade"
        });
    };
    return Room;
}