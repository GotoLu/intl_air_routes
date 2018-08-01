function clickAc(id, data) {
  if (window.QReport) {
    window.QReport.ac({
      acId: id,
      acType: 'click',
      acData: data
    });
  }
}

export default {
  clickAc
};
