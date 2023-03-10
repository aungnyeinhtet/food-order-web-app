import FrontLayout from "@common/FrontLayout";
import Button from "@ui/Button";
import Container from "@ui/Container";
import PasswordTextField from "@ui/PasswordTextField";
import TextField from "@ui/TextField";
import Typography from "@ui/Typography";
import NextLink from "next/link";

const SignInPage = () => {
  return (
    <section className="flex h-screen flex-col justify-center">
      <Container>
        <div className="mx-auto max-w-xl bg-white">
          <Typography
            variant="h4"
            className="py-8 text-center uppercase text-DARK_BLUE"
          >
            Login
          </Typography>
          <form>
            <div className="flex flex-col gap-4 p-6">
              <div className="flex flex-col">
                <Typography
                  variant="h5"
                  className="mb-1 capitalize text-DARK_BLUE"
                >
                  Email{" "}
                </Typography>
                <TextField fullWidth placeholder="Email" />
              </div>
              <div className="flex flex-col">
                <Typography
                  variant="h5"
                  className="mb-1 capitalize text-DARK_BLUE"
                >
                  Password{" "}
                </Typography>
                <PasswordTextField fullWidth placeholder="Password" />
              </div>
              <div className="flex flex-col gap-4">
                <Button
                  fullWidth
                  size="large"
                  className="bg-DARK_BLUE text-white duration-150 ease-linear hover:opacity-90"
                >
                  Submit
                </Button>
                <Typography className=" text-gray-600">
                  <span className=" text-gray-600">
                    {"If you  don't have account yet!"}{" "}
                  </span>
                  <NextLink href={"/signup"} className="text-MAIN_COLOR">
                    Create Account
                  </NextLink>
                </Typography>
              </div>
            </div>
          </form>
        </div>
      </Container>
    </section>
  );
};

export default SignInPage;
SignInPage.getLayout = function getLayout(page: React.ReactElement[]) {
  return <FrontLayout>{page}</FrontLayout>;
};
