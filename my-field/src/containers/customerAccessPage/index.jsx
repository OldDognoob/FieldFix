import React from "react";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import AccountBox from "../../components/accountBox";
import { InnerPageContainer, PageContainer } from "../../components/pageContainer";

function CustomerAccessPage(props){
    return<PageContainer>
        <Navbar/>
        <InnerPageContainer>
            <AccountBox/>
        </InnerPageContainer>
        <Footer/>
    </PageContainer>
}
export default CustomerAccessPage;