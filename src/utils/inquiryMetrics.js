export function getInquiryMetrics(inquiries) {
  return {
    newCount: inquiries.filter((inquiry) => inquiry.status === "Neu").length,
    goodMatchCount: inquiries.filter((inquiry) => inquiry.status === "Gute Passung").length,
  }
}
