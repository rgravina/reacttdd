import React from "react"
import expect from "expect"
import {shallow} from "enzyme"

import App from "../src/App"

describe('App', () => {
    it('renders component', () => {
        const app = shallow(<App/>);
        expect(app).toBeDefined()
    })
})