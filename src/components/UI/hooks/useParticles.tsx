import React, { useContext, useReducer } from "react";

type StateType = {
  particlesAmount: number;
  target: HTMLElement | undefined;
  collision: boolean;
  collider: boolean;
};

type ActionType = {
  type:
    | "SET_PARTICLES_AMOUNT"
    | "SET_TARGET"
    | "SET_COLLISION"
    | "SET_COLLIDER";
  value: number | HTMLElement | undefined | boolean;
};

export const INITIAL_ACTIVE_KEY = "buildingList";

type ReducerType = (state: StateType, action: ActionType) => StateType;

const particlesInitialState: StateType = {
  particlesAmount: 6,
  target: undefined,
  collision: true,
  collider: false,
};

export const particlesReducer: ReducerType = (state, action) => {
  switch (action.type) {
    case "SET_PARTICLES_AMOUNT":
      return { ...state, particlesAmount: action.value as number };
    case "SET_TARGET":
      return { ...state, target: action.value as HTMLElement | undefined };
    case "SET_COLLISION":
      return { ...state, collision: action.value as boolean };
    case "SET_COLLIDER":
      return { ...state, collider: action.value as boolean };
    default:
      return state;
  }
};

const ParticlesContext = React.createContext({
  state: particlesInitialState,
  dispatch: (action: ActionType) => {},
});

export const ParticlesProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(particlesReducer, particlesInitialState);
  return (
    <ParticlesContext.Provider value={{ state, dispatch }}>
      {children}
    </ParticlesContext.Provider>
  );
};

export const useParticles = () => {
  const { state, dispatch } = useContext(ParticlesContext);
  return { ...state, dispatch };
};
