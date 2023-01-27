import mutations from "./mutations.js";
import actions from "./actions.js";
import getters from "./getters.js";

export default {
  namespaced: true,
  state() {
    return {
      lastFetch: null,
      coaches: [
        {
          id: "c1",
          firstName: "Wiktor",
          lastName: "Maciołek",
          areas: ["frontend", "career"],
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mollis mauris non turpis egestas, ac pellentesque augue posuere. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
          hourlyRate: 50,
        },
        {
          id: "c2",
          firstName: "Julie",
          lastName: "Jones",
          areas: ["frontend", "career"],
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mollis mauris non turpis egestas, ac pellentesque augue posuere. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
          hourlyRate: 35,
        },
        {
          id: "c3",
          firstName: "Alex",
          lastName: "Ferguson",
          areas: ["ux", "designer", "backend"],
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mollis mauris non turpis egestas, ac pellentesque augue posuere. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
          hourlyRate: 25,
        },
        {
          id: "c4",
          firstName: "Paulo",
          lastName: "Sousa",
          areas: ["hr", "backend"],
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec mollis mauris non turpis egestas, ac pellentesque augue posuere. Interdum et malesuada fames ac ante ipsum primis in faucibus.",
          hourlyRate: 42.5,
        },
      ],
    };
  },
  mutations,
  actions,
  getters,
};
