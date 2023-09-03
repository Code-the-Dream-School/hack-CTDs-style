import React from 'react';
import styled from 'styled-components';
import starVideo from './assets/pexels_videos_2257259.mp4'

const HeroDiv = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 27em; 
`;

const VideoBackground = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
`;

const HeroContent = styled.div `
    position: relative;
    height: 100%;
    z-index: 1;
    color: rgb(249, 212, 212);
`
const TextContainer = styled.div`
    display: flex;
    justify-content: space-around;
    align-self: flex-end;
    margin-top: 1em;
    background-color: rgba(0, 0, 0, 0.37);
`

const HeroHeading = styled.h1`
    color:rgb(220, 233, 238);
    margin:0;
    padding: 1em;
    text-shadow: 2px 2px 5px rgb(135, 41, 71);
`

const TextContent = styled.h3`
    padding: 1em;
    text-shadow: 2px 2px 5px rgb(135, 41, 71);
`
const Button = styled.button`
    border-radius:.2em;
    border: 1px solid transparent;
    margin-right: 1em;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 700;
    color: #ffffff;
    font-family: inherit;
    background-color: rgb(135, 41, 71);
    cursor: pointer;
    transition: border-color 0.25s, color 0.25s;

    &:hover {
        background-color: rgb(249, 212, 212);
        color: rgb(135, 41, 71);
        border-color: #1a1a1a;
        transition: background-color 0.25s, color 0.25s;
      }
    
    &:focus,
    &:focus-visible {
        outline: 4px auto -webkit-focus-ring-color;
    }
`

const ButtonBox = styled.div`
    display:flex;
    flex-direction: row;
    margin-top: 4.5em;
    justify-content: center;
    margin-right: 40em;
    padding-bottom: 1em;
`

export default function Hero() {
  return (
    <HeroDiv>
      <VideoBackground autoPlay muted loop>
        <source src={starVideo} type="video/mp4"/>
        Your browser does not support the video tag.
      </VideoBackground>
      <HeroContent>
        <HeroHeading>Code the Dream</HeroHeading>
        <ButtonBox>
            <Button>Classes</Button>
            <Button>Need an App?</Button>
        </ButtonBox>
        <TextContainer>
            <TextContent>Real talent.</TextContent>
            <TextContent>Real experience.</TextContent>
            <TextContent>Real Impact.</TextContent>
        </TextContainer>
      </HeroContent>
    </HeroDiv>
  );
}
