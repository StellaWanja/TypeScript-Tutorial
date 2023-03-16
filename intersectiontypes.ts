//intersection type will have all the members from the types that it is based on
type Name = {
  firstName: string;
  lastName: string;
};
type PhoneNumber = {
  landline: string;
  mobile: string;
};

type Contact = Name & PhoneNumber;

const fred: Contact = {
    firstName: "Fred",
    lastName: "Smith",
    landline: "0116 4238978",
    mobile: "079543 4355435",
  };