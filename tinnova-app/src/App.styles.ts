import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body{
    font-family: 'Montserrat', sans-serif;
  }
  table{
    border-collapse: collapse;
    width:80%;
    min-width: 650px;
  }
  th{
    text-align: left;
    background-color: #37fde840;
    height: 60px;
    vertical-align: bottom;
    padding: 0;
    padding-left: 10px;
  }
  tr{
    &.odd{
      background-color: #00c8b30f
    }
    td{
      height: 40px;
      padding: 0;
      max-width: 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      padding-left: 10px;
    }
  }

*,
*:before,
*:after {
	box-sizing: border-box;
}

.toggle {
	cursor: pointer;
	display: inline-block;
}
.toggle-switch {
	display: inline-block;
	background: #ccc;
	border-radius: 16px;
	width: 58px;
	height: 32px;
	position: relative;
	vertical-align: middle;
	transition: background 0.25s;
	&:before,
	&:after {
		content: "";
	}
	&:before {
		display: block;
		background: linear-gradient(to bottom, #fff 0%,#eee 100%);
		border-radius: 50%;
		box-shadow: 0 0 0 1px rgba(0,0,0,0.25);
		width: 24px;
		height: 24px;
		position: absolute;
		top: 4px;
		left: 4px;
		transition: left 0.25s;
	}
	.toggle:hover &:before {
		background: linear-gradient(to bottom, #fff 0%,#fff 100%);
		box-shadow: 0 0 0 1px rgba(0,0,0,0.5);
	}
	.toggle-checkbox:checked + & {
		background: #00c8b3;
		&:before {
			left: 30px;
		}
	}
}
.toggle-checkbox {
	position: absolute;
	visibility: hidden;
}
.toggle-label {
	margin-left: 5px;
	position: relative;
  top: 2px;
  margin: 0px 20px;
}

.toggler-app{
  display: flex;
  justify-content: center;
  margin-top: 200px;
}
`;

type FormInputProps = {
  errorColor: boolean;
};

export const FormInput = styled.input<FormInputProps>`
  background-color: transparent;
  outline: none;
  border: none;
  border-bottom: solid #efeeed 1px;
  padding: 3px 10px;
  display: block;
  margin-bottom: 25px;
  width: 100%;
  height: 30px;
  box-sizing: border-box;
  font-size: 1.2rem;
  padding: 3px 0px;
  font-weight: bold;
  font-family: "Montserrat", sans-serif;
`;

export const FormWrapper = styled.div`
  min-width: 300px;
  max-width: 40vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 10px;
`;

export const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;
`;

export const FormLabel = styled.label`
  font-size: 0.8rem;
  color: #aaaaaa;
`;

export const ErrorLabel = styled.p`
  font-size: 0.7rem;
  color: #eb4a46;
  margin: 0;
  margin-top: -25px;
  padding-bottom: 11px;
`;

export const ValidationMessage = styled.span`
  font-size: 0.8rem;
  color: red;
  position: relative;
  top: 45px;
  left: -220px;
`;

export const FormButton = styled.button`
  width: 100%;
  height: 40px;
  border: unset;
  border-radius: 20px;
  color: white;
  background-color: #00c8b3;
  font-size: 1.4rem;
  margin-top: 40px;
  cursor: pointer;
  &:hover {
    opacity: 70%;
  }
  &[disabled] {
    background-color: #f6f6f6;
    color: #dddcdc;
    &:hover {
      opacity: 100%;
    }
  }
  &:focus {
    outline: none;
  }
`;
