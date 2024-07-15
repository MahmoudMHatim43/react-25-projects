// use to simulate an API response
const dummyApiResponse = {
  Accordian: true,
  RandomColor: true,
  StarRating: true,
  QrCodeGenerator: true,
  LightDarkMode: true,
  ModalTest: true,
  TicTacToe: true,
};
function dataServiceCall() {
  return new Promise((resolve, reject) => {
    if (dummyApiResponse) resolve(dummyApiResponse);
    else reject("Error Occurd");
  });
}
export default dataServiceCall;
