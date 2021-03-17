import React from "react";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import { InnerPageContainer, PageContainer } from "../../components/pageContainer";

function CustomerAccessPage(props){
    return<PageContainer>
        <Navbar/>
        <InnerPageContainer>Hello</InnerPageContainer>
        <Footer/>
    </PageContainer>
}
export default CustomerAccessPage;