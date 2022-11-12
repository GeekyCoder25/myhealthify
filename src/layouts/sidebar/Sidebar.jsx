import styled from "styled-components";
import CustomLink from "../../components/link/CustomLink";

const links = [
  {
    id: 1,
    icon: require("../../assets/clinic.svg").default,
    url: "/clinic",
    link: "Clinic",
  },
  {
    id: 2,
    icon: require("../../assets/history.png"),
    url: "/history",
    link: "History",
  },
  {
    id: 3,
    icon: require("../../assets/wallet.svg").default,
    url: "/subscription",
    link: "Subscription",
  },

  {
    id: 4,
    icon: require("../../assets/ai.png"),
    url: "/ai-doctor",
    link: "AI Doctor",
  },

  {
    id: 5,
    icon: require("../../assets/others.svg").default,
    url: "/others/blog",
    link: "Others",
    dropdownClose:
      "M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z",
    dropdownOpen:
      "M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z",
    dropdownLink: [
      {
        icon: require("../../assets/blogs.svg").default,
        url: "/others",
        link: "Blogs",
      },
      {
        icon: require("../../assets/events.svg").default,
        url: "/others",
        link: "Events",
      },
    ],
  },
];

const Sidebar = () => {
  return (
    <Wrapper>
      {links.map((links) => {
        const {
          id,
          icon,
          url,
          link,
          dropdownClose,
          dropdownOpen,
          dropdownLink,
        } = links;

        return (
          <CustomLink
            key={id}
            link={link}
            icon={icon}
            href={url}
            dropdownClose={dropdownClose}
            dropdownOpen={dropdownOpen}
            dropdownLink={dropdownLink}
          />
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 3rem 0 3rem 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-right: solid 2px #d9ddea;
`;

export default Sidebar;
