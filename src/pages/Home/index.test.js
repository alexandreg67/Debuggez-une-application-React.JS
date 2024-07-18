import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { DataProvider } from "../../contexts/DataContext";
import Page from "./index";

const data = {
  events: [
    {
      id: 1,
      title: "Conférence #productCON",
      date: "2022-04-29T20:28:45.744Z",
      cover: "/images/stem-list-EVgsAbL51Rk-unsplash.png",
      description: "Présentation des outils analytics aux professionnels du secteur",
      type: "soirée entreprise",
    },
    {
      id: 2,
      title: "Forum #productCON",
      date: "2022-03-29T20:28:45.744Z",
      cover: "/images/stem-list-EVgsAbL51Rk-unsplash.png",
      description: "Présentation des outils analytics aux professionnels du secteur",
      type: "forum",
    },
  ],
  people: [
    { id: 1, name: "Samira", position: "CEO", image: "/images/stephanie-liverani-Zz5LQe-VSMY-unsplash.png" },
    { id: 2, name: "Jean-baptiste", position: "Directeur marketing", image: "/images/linkedin-sales-solutions-pAtA8xe_iVM-unsplash.png" },
    { id: 3, name: "Alice", position: "CXO", image: "/images/christina-wocintechchat-com-SJvDxw0azqw-unsplash.png" },
    { id: 4, name: "Luís", position: "Animateur", image: "/images/jonas-kakaroto-KIPqvvTOC1s-unsplash.png" },
    { id: 5, name: "Christine", position: "VP animation", image: "/images/amy-hirschi-b3AYk8HKCl0-unsplash1.png" },
    { id: 6, name: "Isabelle", position: "VP communication", image: "/images/christina-wocintechchat-com-0Zx1bDv5BNY-unsplash.png" },
  ],
};

describe("When Form is created", () => {
  it("a list of fields card is displayed", async () => {
    render(<Page />);
    await screen.findByText("Email");
    await screen.findByText("Nom");
    await screen.findByText("Prénom");
    await screen.findByText("Personel / Entreprise");
  });

  describe("and a click is triggered on the submit button", () => {
    it("the success message is displayed", async () => {
      render(<Page />);
      fireEvent(
        await screen.findByText("Envoyer"),
        new MouseEvent("click", {
          cancelable: true,
          bubbles: true,
        })
      );
      await screen.findByText("En cours");
      await screen.findByText("Message envoyé !");
    });
  });

});


describe("When a page is created", () => {
  it("a list of events is displayed", async () => {
    render(
      <DataProvider value={{ data }}>
        <Page />
      </DataProvider>
    );
  });

  it("a footer is displayed", async () => {
    render(
      <DataProvider value={{ data }}>
        <Page />
      </DataProvider>
    );

    await waitFor(() => {
      expect(screen.getByText("Notre derniére prestation")).toBeInTheDocument();
      expect(screen.getByText("Contactez-nous")).toBeInTheDocument();
      expect(screen.getByText("Une agence événementielle propose des prestations de service spécialisées dans la conception et l'organisation de divers événements tels que des événements festifs, des manifestations sportives et culturelles, des événements professionnels")).toBeInTheDocument();
    });
  });

  it("an event card, with the last event, is displayed", async () => {
    render(
      <DataProvider value={{ data }}>
        <Page />
      </DataProvider>
    );

    await waitFor(() => {
      expect(screen.getByText("Notre derniére prestation")).toBeInTheDocument();
    });
  });
});
