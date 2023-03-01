import { screen, render } from "@testing-library/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CarouselComponent from "../Carousel";
describe("Home Component", () => {
    it("checks whether 1st slide is Present", () => {
      render(
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<CarouselComponent />} />
          </Routes>
        </BrowserRouter>
      );
      expect(screen.getByRole('img', {
        name: /first slide/i
      })).toBeInTheDocument();
    });
    it("checks whether 2nd slide is Present", () => {
        render(
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<CarouselComponent />} />
            </Routes>
          </BrowserRouter>
        );
        expect(screen.getByRole('img', {
          name: /second slide/i
        })).toBeInTheDocument();
      });
      it("checks whether 3rd slide  is Present", () => {
        render(
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<CarouselComponent />} />
            </Routes>
          </BrowserRouter>
        );
        expect(screen.getByRole('img', {
          name: /third slide/i
        })).toBeInTheDocument();
      });
});