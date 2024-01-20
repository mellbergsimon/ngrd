import { Button } from "../ui/button";

const IncButton = ({ funcboi }: { funcboi: () => void }) => (
  <Button onClick={funcboi}>
    IncMedia
  </Button>
);

export { IncButton };
