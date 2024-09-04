import { DashboardIcon, PublishIcon, SpinnerIcon } from "@sanity/icons";
import { Button, Card, Heading } from "@sanity/ui";
import { useState } from "react";

export const RebuildWebsite = () => {
  return {
    title: "Publish Website",
    name: "publish-website", // localhost:3333/my-custom-tool
    icon: DashboardIcon,
    component: () => {
      const [isPublishing, setIsPublishing] = useState(false);

      const handlePublish = async () => {
        setIsPublishing(true);
        // TODO: Implement publish logic
        try {
          await fetch(
            "https://api.cloudflare.com/client/v4/pages/webhooks/deploy_hooks/653f9919-2272-4378-a734-20e6cdd452f2",
            {
              method: "POST",
            }
          );
        } catch (error) {
          console.error(error);
        }
        setTimeout(() => {
          setIsPublishing(false);
        }, 60000 * 5);
      };

      return (
        <div
          style={{
            padding: "1rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "70vh",
          }}
        >
          <style>
            {`
              @keyframes spin {
                from {
                  transform: rotate(0deg);
                }
                to {
                  transform: rotate(360deg);
                }
              }
            `}
          </style>
          <Button
            fontSize={[2, 2, 3]}
            style={{
              cursor: "pointer",
            }}
            disabled={isPublishing}
            onClick={handlePublish}
            icon={
              isPublishing ? (
                <span>
                  <SpinnerIcon
                    style={{ animation: "spin 1s linear infinite" }}
                  />
                </span>
              ) : (
                PublishIcon
              )
            }
            padding={[4, 4, 5]}
            text={isPublishing ? "Publishing..." : "Publish Website"}
            tone="primary"
          />
        </div>
      );
    },
  };
};
