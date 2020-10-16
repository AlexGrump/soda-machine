import Sound from "@/common/sound";

import SignalOk from "@/assets/sounds/signal_ok.wav";
import SignalError from "@/assets/sounds/signal_error.wav";
import SignalDone from "@/assets/sounds/signal_done.wav";
import IceSound from "@/assets/sounds/ice.wav";
import PourWaterSound from "@/assets/sounds/pour_water.wav";

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
        id: 1,
        name: "Pepsi",
        brandColor: "#005CB4",
        drinkColor: "#412E15",
        stock: 7000,
        price: 5.5,
      },
      {
        id: 2,
        name: "Sprite",
        brandColor: "#008B47",
        drinkColor: "#eeeeee",
        stock: 20,
        price: 7.99,
      },
      {
        id: 3,
        name: "Fanta",
        brandColor: "#FF8300",
        drinkColor: "#FF8300",
        stock: 260,
        price: 5.99,
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
    withIce: false,
  },

  actions: {
    async pourDrink({ state }) {
      await wait(1600);

      if (state.withIce) {
        MechanicActions.ice();
        await wait(3200);
      }

      MechanicActions.pour();
      await wait(7000);

      MachineSpeaker.done();
    },

    selectDrink({ commit, dispatch }, index) {
      commit("setDrinkIndex", index);
      MachineSpeaker.ok();

      dispatch("pourDrink");
    },

    selectSize({ commit }, index) {
      commit("setSizeIndex", index);
      MachineSpeaker.ok();
    },
  },

  mutations: {
    setDrinkIndex(state, index) {
      state.activeDrinkIndex = index;
    },
    setSizeIndex(state, index) {
      state.activeSizeIndex = index;
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
  },
};
