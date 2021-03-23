import React from "react";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import AccountBox from "../../components/accountBox";
import { InnerPageContainer, PageContainer } from "../../components/pageContainer";
import styled from "styled-components";
import { useParams } from "react-router";


const StyledInnerContainer = styled(InnerPageContainer)`
margin-top: 4em;
`;

function CustomerAccessPage(props){
    const { action } = useParams();
    
    
    return<PageContainer>
        <Navbar/>
        <InnerPageContainer>
            <AccountBox initialActive={action}/>
        </InnerPageContainer>
        <Footer/>
    </PageContainer>
}
export default CustomerAccessPage;