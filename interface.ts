//An interface allows a new type to be created with a name and structure.
interface User {
  name: string;
  age: number;
  id: number;
  email: string;
  // methodName: (paramName: ParamType) => MethodReturnType;
  onClick: () => void;
}

//Declaration merging - creation and merge interfaces with the same name
//eg buttonprops
interface ButtonProps {
    color: string;
}
interface ButtonProps {
    id: string;
  }
interface ColoredButtonProps extends ButtonProps {
  color: string;
}

interface ColoredButtonProps extends ButtonProps {
  color: string;
}

const greenBuyButton: ColoredButtonProps = {
    color: "Green",
    id: "a25"
};

//