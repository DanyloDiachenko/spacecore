export interface ITariffesFiltersInitStore {
    price: {
        min: number;
        max: number;
    };
    disks: {
        min: number;
        max: number;
    };
    disksVolume: {
        min: number;
        max: number;
    };
    cores: {
        min: number;
        max: number;
    };
    ram: {
        min: number;
        max: number;
    };
    period: number;
}

const initStore: ITariffesFiltersInitStore = {
    price: {
        min: 0,
        max: 999999999999,
    },
    disks: {
        min: 0,
        max: 999999999999,
    },
    disksVolume: {
        min: 0,
        max: 999999999999,
    },
    cores: {
        min: 0,
        max: 999999999999,
    },
    ram: {
        min: 0,
        max: 999999999999,
    },
    period: 1,
};

export default initStore;
