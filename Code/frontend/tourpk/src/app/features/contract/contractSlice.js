import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   agreement: {
      Services: "Service Provider agrees to provide tourism-related services, as described on the TourPK website, to customers who purchase such services through the TourPK platform.",
      Relationship: "The relationship between the Company and Service Provider is that of independent contractors. Nothing contained in this Agreement shall be construed as creating any agency, partnership, joint venture, or other form of joint enterprise between the parties.",
      Fees: "Service Provider agrees to pay TourPK a commission on all sales made through the TourPK platform. The commission rate will be specified in a separate commission agreement between the parties.",
      Term: "This Agreement shall commence on the date Service Provider registers for the TourPK website and shall continue until terminated by either party upon written notice to the other party.",
      IntellectualProperty: "Service Provider retains all ownership rights to any intellectual property it provides to the TourPK website. Service Provider grants TourPK a non-exclusive, royalty-free, worldwide license to use, reproduce, distribute, and display such intellectual property on the TourPK website solely for the purpose of marketing Service Provider's tourism-related services.",
      Confidentiality: "Service Provider agrees to keep all confidential information provided by TourPK or its customers confidential and not disclose such information to any third party without TourPK's prior written consent.",
      RepresentationsAndWarranties: "Service Provider represents and warrants that: (a) it has the necessary skills, expertise, and qualifications to provide the tourism-related services offered on the TourPK platform; (b) it will perform its obligations in a professional and workmanlike manner; (c) it has all necessary licenses and permits to provide the tourism-related services; and (d) its provision of the tourism-related services will not infringe any intellectual property rights or other proprietary rights of any third party.",
      Indemnification: "Service Provider agrees to indemnify, defend, and hold harmless TourPK, its affiliates, and their respective officers, directors, employees, and agents from and against any and all claims, damages, losses, liabilities, and expenses (including reasonable attorneys' fees) arising out of or in connection with Service Provider's provision of the tourism-related services or breach of this Agreement.",
      GoverningLawAndJurisdiction: "This Agreement shall be governed by and construed in accordance with the laws of Pakistan. Any disputes arising out of or in connection with this Agreement shall be resolved by the courts of Pakistan.",
      EntireAgreement: "This Agreement constitutes the entire agreement between the parties and supersedes all prior or contemporaneous agreements or representations, whether written or oral, relating to the subject matter of this Agreement.",
   },
   serviceProvider: "[insert name of Service Provider]",
};


export const contractSlice = createSlice({
   name: 'contract',
   initialState,
   reducers: {

   },
});

export const { } = contractSlice.actions;

export default contractSlice.reducer;
