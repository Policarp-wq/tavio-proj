import { ILogininfo } from '../../models/ILoginInfo'
import { offerApi, OfferApi } from '../../models/IOfferApi'
import { IUser } from '../../models/IUser'
import userReducer, { initialState, loginUser } from '../userSlice'

const mockLoginData : ILogininfo = {
    login: "mock",
    password: "mock"
}

describe('User slice request test', () => {
    test('On request pending loading property is true ', () => {
        const state = userReducer(initialState, loginUser.pending('', mockLoginData));
        expect(state.authed).toBeFalsy();
        expect(state.requested).toBeTruthy();
    })
    test('Login data stores correctly', () => {
        const mockUser: IUser = {
            id: 'qwq',
            login: "mockUser",
            name: "Mock User",
            phone: "1234567890",
            rating: 5,
            registerDate: "2024-05-27",
            iconUrl: ""
        }
        jest.spyOn(offerApi, 'loginUser').mockResolvedValue(mockUser);

        const state = userReducer(initialState, loginUser.fulfilled(mockUser, 'ddd', mockLoginData));
        expect(state.authed).toBeTruthy();
        expect(state.user).toEqual(mockUser);
    })
})