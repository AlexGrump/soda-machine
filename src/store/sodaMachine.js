import Sound from "@/common/sound";

import SignalOk from "@/assets/sounds/signal_ok.wav";
import SignalError from "@/assets/sounds/signal_error.wav";
import SignalDone from "@/assets/sounds/signal_done.wav";
import IceSound from "@/assets/sounds/ice.wav";
import PourWaterSound from "@/assets/sounds/pour_water.wav";

const NOT_ENOUGH_MONEY = "Not enough money";

const wait = (timer) => {
  return new Promise((r) => setTimeout(r, timer));
};

const MachineSpeaker = {
  ok() {
    Sound.play(SignalOk);
  },
  error() {
    Sound.play(SignalError);
  },
  done() {
    Sound.play(SignalDone);
  },
};

const MechanicActions = {
  ice() {
    Sound.play(IceSound);
  },
  pour() {
    Sound.play(PourWaterSound);
  },
};

export default {
  namespaced: true,

  state: {
    drinks: [
      {
        id: 6,
        name: "Water",
        brandColor: "#03a9f4",
        drinkColor: "#eee",
        drinkOpacity: 0.1,
        stock: 7000,
        cost: 1,
      },
      {
        id: 0,
        name: "CocaCola",
        brandColor: "#F40009",
        drinkColor: "#381806",
        drinkOpacity: 0.95,
        stock: 260,
        cost: 5.99,
      },
      {
        id: 1,
        name: "Fanta",
        brandColor: "#FF8300",
        drinkColor: "#FF8300",
        drinkOpacity: 0.75,
        stock: 260,
        cost: 5.99,
      },
      {
        id: 2,
        name: "Sprite",
        brandColor: "#008B47",
        drinkColor: "#eeeeee",
        drinkOpacity: 0.25,
        stock: 20,
        cost: 6.99,
      },
      {
        id: 3,
        name: "Pepsi",
        brandColor: "#005CB4",
        drinkColor: "#381806",
        drinkOpacity: 0.95,
        stock: 7000,
        cost: 5.99,
      },
      {
        id: 4,
        name: "Tarhun",
        brandColor: "#4aa418",
        drinkColor: "#255908",
        drinkOpacity: 0.9,
        stock: 7000,
        cost: 3.99,
      },
      {
        id: 5,
        name: "Tomato",
        brandColor: "tomato",
        drinkColor: "tomato",
        drinkOpacity: 1,
        stock: 7000,
        cost: 3.99,
      },
      {
        id: 7,
        name: "Acid",
        brandColor: "#42c73d",
        drinkColor: "#00ff00",
        drinkOpacity: 1,
        stock: 7000,
        cost: 0.01,
      },
    ],
    sizes: [
      {
        id: 1,
        name: "sm",
        size: 250,
      },
      {
        id: 2,
        name: "md",
        size: 350,
      },
      {
        id: 3,
        name: "lg",
        size: 450,
      },
    ],
    activeSizeIndex: null,
    activeDrinkIndex: null,
    cupInPlace: false,
    withIce: true,
    balance: 20.65,
    error: null,
    inProgress: false,
    cupIsFull: false,
  },

  actions: {
    async pourDrink({ state, commit }) {
      commit("setProgress", true);
      await wait(1600);

      if (state.withIce) {
        MechanicActions.ice();
        await wait(3200);
      }

      commit("fillCup", true);
      MechanicActions.pour();
      await wait(6000);

      commit("setProgress", false);
      MachineSpeaker.done();
    },

    selectDrink({ commit, state, dispatch, getters }, id) {
      if (getters.isBusy) {
        return;
      }

      const index = state.drinks.findIndex((drink) => drink.id === id);
      commit("setDrinkIndex", index);
      commit("setError", null);

      if (getters.drink.cost > state.balance) {
        commit("setError", NOT_ENOUGH_MONEY);
        MachineSpeaker.error();
        return;
      }

      commit("reduceBalance", getters.drink.cost);
      MachineSpeaker.ok();
      dispatch("pourDrink");
    },

    selectSize({ commit, state }, id) {
      const index = state.sizes.findIndex((size) => size.id === id);
      commit("setSizeIndex", index);
      MachineSpeaker.ok();
    },

    toggleIce({ commit, state }) {
      commit("setIce", !state.withIce);
    },

    drinking({ commit, state }) {
      if (state.inProgress) {
        return;
      }
      commit("fillCup", false);
      commit("setDrinkIndex", null);
    },
  },

  mutations: {
    setDrinkIndex(state, index) {
      state.activeDrinkIndex = index;
    },

    setSizeIndex(state, index) {
      state.activeSizeIndex = index;
    },

    setIce(state, value) {
      state.withIce = value;
    },

    reduceBalance(state, value) {
      state.balance -= value;
    },

    setError(state, message) {
      state.error = message;
    },

    setProgress(state, value) {
      state.inProgress = value;
    },

    fillCup(state, value) {
      state.cupIsFull = value;
    },
  },

  getters: {
    drinks(state) {
      const { activeDrinkIndex, drinks } = state;
      return drinks.map((drink, index) => ({
        ...drink,
        active: index === activeDrinkIndex,
      }));
    },

    sizes(state) {
      const { activeSizeIndex, sizes } = state;
      return sizes.map((size, index) => ({
        ...size,
        active: index === activeSizeIndex,
      }));
    },

    drink(state) {
      const { activeDrinkIndex, drinks } = state;
      return activeDrinkIndex !== null ? drinks[activeDrinkIndex] : null;
    },

    size(state) {
      const { activeSizeIndex, sizes } = state;
      return activeSizeIndex !== null ? sizes[activeSizeIndex] : null;
    },

    isBusy(state) {
      return state.inProgress || state.cupIsFull;
    },

    isDone(state) {
      return !state.inProgress && state.cupIsFull;
    },
  },
};
