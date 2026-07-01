CREATE TABLE `dodream_shared_state` (
	`id` integer PRIMARY KEY NOT NULL,
	`records_json` text DEFAULT '[]' NOT NULL,
	`calendar_items_json` text DEFAULT '[]' NOT NULL,
	`updated_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL
);
