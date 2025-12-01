//testing for Hero
import React from 'react';
import { render,screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import Hero from "../landing_page/home/Hero"
import { describe, expect,test } from 'vitest';

describe("Hero component", ()=>{
    test('Renders hero image',()=>{
        render(<Hero/>);
        const heroImage =screen.getByAltText('Hero Image');
        expect(heroImage).toBeInTheDocument();
        expect(heroImage.src).toContain('homeHero.png');
    })
})
describe("Hero component", ()=>{
    test('Renders sign up ',()=>{
        render(<Hero/>);
        const signupBtn =screen.getByRole('button' , {name:/Signup Now/i});
        expect(signupBtn).toBeInTheDocument();
        expect(signupBtn).toHaveClass('btn-primary');
    })
})