import SidebarSection from "~/components/sidebar-section";
import UserCard from "~/components/user-card";
import { WhoFollowUsers } from "~/mock";

export default function WhoFollow(){
    return(
        <SidebarSection 
            title="Kimi takip etmeli"
            more="/connect_people">
            {WhoFollowUsers.map((user, index) =><UserCard user={user} key={index}/>)}
        </SidebarSection>
    )
}