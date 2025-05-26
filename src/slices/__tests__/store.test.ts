import { store } from "../../store/store";

test('Store contains all reducers', () => {
    const state = store.getState();
    expect(state).toHaveProperty('users');
    expect(state).toHaveProperty('offers');
});