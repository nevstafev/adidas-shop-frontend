import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Label = styled.span`
  font-family: "AvenirNext";
  font-weight: bold;
  font-size: 24px;
  text-transform: uppercase;
  padding: 0px 20px;
  color: #4d42f8;
`;

const Button = styled.button`
  font-family: "AvenirNext";
  font-weight: bold;
  font-size: 24px;
  color: #d6d6d6;
  background-color: transparent;
  border: none;
  text-transform: uppercase;
  &:hover {
    color: #4d42f8;
  }
`;

const ButtonSelected = styled(Button)`
  color: #4d42f8;
`;

export default () => {
  return (
    <Wrapper>
      <Label>Size</Label>
      <ButtonSelected>36</ButtonSelected>
      <Button>37</Button>
      <Button>38</Button>
      <Button>39</Button>
      <Button>40</Button>
      <Button>41</Button>
      <Button>42</Button>
    </Wrapper>
  );
};
