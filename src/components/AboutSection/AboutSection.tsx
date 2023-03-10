import React from "react";
import SectionTitle from "@components/SectionTitle";
import Container from "@ui/Container";
import Typography from "@ui/Typography";
import NextImage from "next/image";
import img from "../../../public/assets/hero/main_img.png";
import Button from "@ui/Button";
import { NEXT_IMAGE_QUALITY } from "@constant/app";

const AboutSection = () => {
  return (
    <section className="pt-32" id="about">
      <Container>
        <SectionTitle
          title="About us"
          text="The Healthy Food For walthy Mood"
        />
        <div className="flex flex-col items-center justify-between gap-4 lg:flex-row">
          <div className="flex w-full flex-row items-center justify-center lg:w-[55%]">
            <NextImage
              src={img}
              alt="about image"
              className="h-auto w-auto lg:h-4/6 lg:w-4/6"
              quality={NEXT_IMAGE_QUALITY}
              priority
            />
          </div>
          <div className="flex-1">
            <Typography variant="h2" className="text-DARK_BLUE">
              The Healthy Food For walthy Mood
            </Typography>
            <Typography className="mt-8 text-gray-600">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              commodi rem vel hic voluptate voluptas sapiente eius officia
              asperiores, aperiam et? Pariatur non molestiae necessitatibus esse
              odit alias ad sequi.
            </Typography>
            <Typography className="mt-6 text-gray-600">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              commodi rem vel hic voluptate voluptas sapiente eius officia
              asperiores, aperiam et? Pariatur non molestiae necessitatibus esse
              odit alias ad sequi.
            </Typography>
            <div className="mt-8">
              <Button className="bg-MAIN_COLOR font-semibold text-white transition-all duration-150 hover:opacity-80">
                Learn more
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutSection;
