import { Box, Typography } from "@mui/material";
import React, { memo } from "react";
import { lightBlue } from "../../constants/color";
import moment from "moment";
import { fileFormat } from "../../lib/features";
import RenderAttachment from "./RenderAttachment";
import { motion } from "framer-motion";
import './Message.css'

const MessageComponent = ({ message, user }) => {
  const { sender, content, attachment = [], createdAt } = message;

  const sameSender = sender?._id === user?._id;

  const timeAgo = moment(createdAt).fromNow();

  return (
    <motion.div
      initial={{ opacity: 0, x: "-100%" }}
      whileInView={{ opacity: 1, x: 0 }}
      className='msg-container' style={{
        alignSelf:sameSender?"flex-end" : "flex-start",
      }}
    >
      {!sameSender && (
        <Typography className='sender' variant="caption">
          {sender.name}
        </Typography>
      )}

      {content && <Typography>{content}</Typography>}

      {attachment.length > 0 &&
        attachment.map((attachment, index) => {
          const url = attachment.url;
          const file = fileFormat(url);

          return (
            <Box key={index}>
              <a
                href={url}
                target="_blank"
                download
                style={{
                  color: "lightgray",
                }}
              >
                {RenderAttachment(file, url)}
              </a>
            </Box>
          );
        })}

      <Typography variant="caption" color="gray">
        {timeAgo}
      </Typography>
    </motion.div>
  );
};

export default memo(MessageComponent);