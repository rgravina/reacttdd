import App from "../src/App"

describe('App', () => {
    it('renders component', () => {
        const app = shallow(<App/>);
        expect(app).toBeDefined()
    })
});